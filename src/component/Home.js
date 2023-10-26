import { useState } from "react"


function SingleMenuComponent(props){
return(<div>
<h3>{props.title}</h3>
<h3>{props.description}</h3>
</div>
)

}


export default function Home(){

const [menuItems, setMenuItems] = useState()

console.log('menuItems -> ', menuItems)

const handleBtnClick = () => {
console.log('hey class')

fetch('https://codice-boca.web.app/menu')
.then(res => res.json())
.then(data => setMenuItems(data))
.catch(console.error)

}


    return(
        <>
        <h2>I'm Home component</h2>
        <button onClick={() => handleBtnClick()}>get data</button>
        {menuItems && menuItems.map((singleItem) => {
            return(
                <div>
            
            <SingleMenuComponent title={singleItem.title} description={singleItem.description} />
            
            
            </div>
            )
            
        })}
        </>
    )



}