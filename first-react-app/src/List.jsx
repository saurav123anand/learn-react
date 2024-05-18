// rendering list
import PropTypes from 'prop-types'

function List(props){
    // const fruits=[{id:1,name:"apple",calories:95},
    // {id:2,name:"orange",calories:105},
    // {id:3,name:"banana",calories:125},
    // {id:4,name:"pineapple",calories:55}];
    // // fruits.sort((a,b)=>a.name.localeCompare(b.name))
    // fruits.sort((a,b)=>a.calories-b.calories)
    // const listItems=fruits.map(fruit=><li key={fruit.id}>{fruit.name} : &nbsp;<b>{fruit.calories}</b></li>)
    // console.log(listItems);
    // return (
    //     <ol>
    //         {listItems}
    //     </ol>
    // )

    const category=props.category;
    const itemList=props.items;
    const listItems=itemList.map(item=><li key={item.id}>{item.name} : &nbsp;<b>{item.calories}</b></li>);
    return (
        <>
           <h3>{category}</h3>
           <ol>{listItems}</ol>
        </>

    )


}
List.propTypes={
    category:PropTypes.string,
    items:PropTypes.arrayOf(PropTypes.shape({id:PropTypes.number,name:PropTypes.string,calories:PropTypes.number}))
}
List.defaultProps={
    category:"Category",
    items:[]
}
export default List;