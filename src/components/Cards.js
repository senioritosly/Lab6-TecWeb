import React from 'react';
import { useState } from 'react';
import Card from './Card';
import Modal from './Modal';

function Cards() {
    const [items, setItems] = useState([
        {id: 1, img: '/img/cat.png', stat: ""},
        {id: 1, img: '/img/cat.png', stat: ""},
        {id: 2, img: '/img/dog.png', stat: ""},
        {id: 2, img: '/img/dog.png', stat: ""},
        {id: 3, img: '/img/elephant.png', stat: ""},
        {id: 3, img: '/img/elephant.png', stat: ""},
        {id: 4, img: '/img/fish.png', stat: ""},
        {id: 4, img: '/img/fish.png', stat: ""},
        {id: 5, img: '/img/fox.png', stat: ""},
        {id: 5, img: '/img/fox.png', stat: ""},
        {id: 6, img: '/img/panda.png', stat: ""},
        {id: 6, img: '/img/panda.png', stat: ""},
        {id: 7, img: '/img/tiger.png', stat: ""},
        {id: 7, img: '/img/tiger.png', stat: ""},
        {id: 8, img: '/img/turtleduck.png', stat: ""},
        {id: 8, img: '/img/turtleduck.png', stat: ""}
    ].sort(() => Math.random() - 0.5))

    const [prev, setPrev] = useState(-1)
    const [selected, setSelected] = useState(0)
    const [moves, setMoves] = useState(0)
    const [win, setWin] = useState(false)
    const [showModal, setShowModal] = useState(false)

    function check(current){
        if(items[current].id == items[prev].id){
            items[current].stat = "correct"
            items[prev].stat = "correct"
            setItems([...items])
            setPrev(-1)
            setSelected(0)
            setMoves(moves + 1)
            if(items.filter(item => item.stat === "correct").length === items.length){
                setWin(true)
            }
        }else{
            items[current].stat = "wrong"
            items[prev].stat = "wrong"
            setItems([...items])
            setTimeout(() => {
                items[current].stat = ""
                items[prev].stat = ""
                setItems([...items])
                setPrev(-1)
                setSelected(0)
                setMoves(moves + 1)
            }, 1000)
        }
    }

    const handleClick = (id) => {
        const clickedItem = items[id];
        if (clickedItem.stat === "correct" || selected === 2) {
            return;
        } else if (selected === 0) {
            clickedItem.stat = "active";
            setItems([...items]);
            setSelected(1);
            setPrev(id);
        } else if (selected === 1 && id !== prev) {
            clickedItem.stat = "active";
            setItems([...items]);
            setSelected(2);
            check(id);
        }
    }

    function handleReset() {
        setItems(
          [
            { id: 1, img: '/img/cat.png', stat: "" },
            { id: 1, img: '/img/cat.png', stat: "" },
            { id: 2, img: '/img/dog.png', stat: "" },
            { id: 2, img: '/img/dog.png', stat: "" },
            { id: 3, img: '/img/elephant.png', stat: "" },
            { id: 3, img: '/img/elephant.png', stat: "" },
            { id: 4, img: '/img/fish.png', stat: "" },
            { id: 4, img: '/img/fish.png', stat: "" },
            { id: 5, img: '/img/fox.png', stat: "" },
            { id: 5, img: '/img/fox.png', stat: "" },
            { id: 6, img: '/img/panda.png', stat: "" },
            { id: 6, img: '/img/panda.png', stat: "" },
            { id: 7, img: '/img/tiger.png', stat: "" },
            { id: 7, img: '/img/tiger.png', stat: "" },
            { id: 8, img: '/img/turtleduck.png', stat: "" },
            { id: 8, img: '/img/turtleduck.png', stat: "" }
          ].sort(() => Math.random() - 0.5)
        );
        setPrev(-1);
        setSelected(0);
        setMoves(0);
        setWin(false);
      }

    return (
        <div className="container">
            { items.map((item, index) => (
                <Card key={index} item={item} id={index} handleClick={handleClick} />
            )) }
            <div className='moves-container'>
                <p>Moves:</p> 
                <p>{moves}</p>
            </div>
            <Modal win={win} moves={moves} reset={handleReset} />
        </div>
    )
}

export default Cards