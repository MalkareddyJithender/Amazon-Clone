import '../css/Shuffle.css';
import React from 'react';
import shuffle from '../helpers/shuffle';
import FlipMove from 'react-flip-move';
import Toggle from './Toggle';
import throttle from '../helpers/throttle';
import CheckoutProduct from './CheckoutProduct';

class ListItem extends React.Component
{   

    render()
    {
        const listClass = `list-item card ${this.props.view}`;
        // const style = { zIndex: 100 - this.props.index };
        return (
            <li key={this.props.id} className={listClass}  >
                <CheckoutProduct
                 key={this.props.id}
                 id={this.props.id}
                 title={this.props.title}
                 price={this.props.price}
                 rating={this.props.rating}
                 image={this.props.image}
                 clickHandlerBoolean={true}
                 clickHandler={this.props.clickHandler}
                 />
                
            </li>
        )
    }
};

class Shuffle extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state={
            removedArticles:[],
            view:'list',
            sortingMethod:'chronological',
            enterLeaveAnimation:'accordianVertical',
            articles:this.props.basket
        };

        this.toggleList = this.toggleList.bind(this);
        this.toggleGrid = this.toggleGrid.bind(this);
        this.sortShuffle = this.sortShuffle.bind(this);
        this.sortRotate = this.sortRotate.bind(this);
    };

    toggleList()
    {
     this.setState({
         view:'list',
         enterLeaveAnimation:'accordianVertical'
     })   
    };

    toggleGrid()
    {
        this.setState({
            view:'grid',
            enterLeaveAnimation:'accordianHorizontal'
        })
    };


    sortShuffle()
    {
        this.setState({
            sortingMethod:'shuffle',
            articles:shuffle(this.state.articles)
        });
    };

    moveArticle(source,dest,id)
    {
        const sourceArticles = this.state[source].slice();
        let destinationArticles = this.state[dest].slice();

        if ( !sourceArticles.length ) return;

        // Find the index of the article clicked.
        // If no ID is provided, the index is 0
        const i = id ? sourceArticles.findIndex((article) =>{ return article.id === id;}) : 0;
        console.log(i);
         // If the article is already removed, do nothing.
         if(i === -1) return ;

        destinationArticles = [].concat(sourceArticles.splice(i,1),destinationArticles);

        this.setState({
            [source]:sourceArticles,
            [dest]:destinationArticles
        })
    }

    sortRotate()
    {
        const articles = this.state.articles.slice();
        articles.unshift(articles.pop());

        this.setState({
            sortingMethod:'rotate',
            articles:articles
        });
    };

    renderArticles()
    {
        return this.state.articles.map((article,i) =>
        {
            return <ListItem
                     key={article.id}
                     index={i}
                     view={this.state.view}
                     clickHandler={() => this.moveArticle('articles', 'removedArticles', article.id)}
                     {...article}
                     />

        })
    };

    render()
    {

        return (
            <div className="main-container">
            <div id="shuffle" >
                <header>
                    <div className="abs-left">
                        <Toggle
                          clickHandler ={this.toggleList}
                          text="List"
                          icon="list"
                          active={this.state.view === 'list'}
                        />

                        <Toggle
                          clickHandler={this.toggleGrid}
                          text="Grid" icon="th"
                          active={this.state.view === 'grid'}
                        />

                    </div>
                    <div className="abs-right">
                        <Toggle
                          clickHandler={this.sortShuffle}
                          text="Shuffle" icon="random"
                          active={this.state.sortingMethod === 'shuffle'}
                        /> 
                        
                        <Toggle
                          clickHandler={this.sortRotate}
                          text="Rotate" icon="refresh"
                          active={this.state.sortingMethod === 'rotate'}
                        />             
                    </div>
                </header>
                <div>
                    <FlipMove 
                     staggerDurationBy="30"
                     duration="500"
                     enterAnimation={this.state.enterLeaveAnimation}
                     leaveAnimation={this.state.enterLeaveAnimation}
                     typeName="ul"
                     className={this.state.view}
                    >
                        
                        {this.renderArticles()}

                        {/* <footer key="foot">
                            <div className="footer-abs-right">
                            <Toggle
                              clickHandler={() => (
                                this.moveArticle('removedArticles', 'articles')
                              )}
                              text="Add Item"
                              icon="plus"
                              active={this.state.removedArticles.length > 0}
                            />

                            <Toggle
                              clickHandler={() => (
                                
                                this.moveArticle('articles', 'removedArticles')
                              )}
                              text="Remove Item"
                              icon="close"
                              active={this.state.articles.length > 0}
                            />

                            </div>
                        </footer> */}

                    </FlipMove>
                </div>
            </div>
            </div>
        );
    }
};

export default Shuffle;