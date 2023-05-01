import React from 'react';
import { useState } from 'react';
import Card from './Card';
import Modal from './Modal';

function Cards() {
    const [items, setItems] = useState([
        {id: 1, img: 'https://i.pinimg.com/originals/d5/fa/63/d5fa636047992a12cc9c68a0e24bb846.png', stat: ""},
        {id: 1, img: 'https://i.pinimg.com/originals/d5/fa/63/d5fa636047992a12cc9c68a0e24bb846.png', stat: ""},
        {id: 2, img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c6da62d5-9811-4f21-856f-435b8c7328b9/d75aals-382bbd06-02bd-4b46-9766-d6e25e2d7f23.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M2ZGE2MmQ1LTk4MTEtNGYyMS04NTZmLTQzNWI4YzczMjhiOVwvZDc1YWFscy0zODJiYmQwNi0wMmJkLTRiNDYtOTc2Ni1kNmUyNWUyZDdmMjMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.0whltT4sNbzaDI4dakyH_-d-L-NSv7VAyb0w8ptTcX4', stat: ""},
        {id: 2, img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c6da62d5-9811-4f21-856f-435b8c7328b9/d75aals-382bbd06-02bd-4b46-9766-d6e25e2d7f23.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M2ZGE2MmQ1LTk4MTEtNGYyMS04NTZmLTQzNWI4YzczMjhiOVwvZDc1YWFscy0zODJiYmQwNi0wMmJkLTRiNDYtOTc2Ni1kNmUyNWUyZDdmMjMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.0whltT4sNbzaDI4dakyH_-d-L-NSv7VAyb0w8ptTcX4', stat: ""},
        {id: 3, img: 'https://dejpknyizje2n.cloudfront.net/marketplace/products/ffae18db02f64ed58a78bcd9c0619032.png', stat: ""},
        {id: 3, img: 'https://dejpknyizje2n.cloudfront.net/marketplace/products/ffae18db02f64ed58a78bcd9c0619032.png', stat: ""},
        {id: 4, img: 'https://static.vecteezy.com/system/resources/previews/019/527/069/original/an-8-bit-retro-styled-pixel-art-illustration-of-a-blue-fish-free-png.png', stat: ""},
        {id: 4, img: 'https://static.vecteezy.com/system/resources/previews/019/527/069/original/an-8-bit-retro-styled-pixel-art-illustration-of-a-blue-fish-free-png.png', stat: ""},
        {id: 5, img: 'https://i.redd.it/made-pixel-art-of-animal-jam-animals-when-i-got-bored-doing-v0-8lyn89iiq3ba1.png?width=1600&format=png&auto=webp&s=449ce5d9d70c47f8c0c47aed2e6c2b92a22f9631', stat: ""},
        {id: 5, img: 'https://i.redd.it/made-pixel-art-of-animal-jam-animals-when-i-got-bored-doing-v0-8lyn89iiq3ba1.png?width=1600&format=png&auto=webp&s=449ce5d9d70c47f8c0c47aed2e6c2b92a22f9631', stat: ""},
        {id: 6, img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/98caca11-4bbd-4715-840b-e2db709f46e3/ddm7tzp-0b8788ba-90e9-4fc7-9800-432dc928588e.png/v1/fill/w_215,h_265/red_panda_pixel_art_by_tatsuyodragneel_ddm7tzp-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjY1IiwicGF0aCI6IlwvZlwvOThjYWNhMTEtNGJiZC00NzE1LTg0MGItZTJkYjcwOWY0NmUzXC9kZG03dHpwLTBiODc4OGJhLTkwZTktNGZjNy05ODAwLTQzMmRjOTI4NTg4ZS5wbmciLCJ3aWR0aCI6Ijw9MjE1In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.tLdOHy6QcQoVdYNuZV-4Suv6TDSYidufXOX4jxx7OlU', stat: ""},
        {id: 6, img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/98caca11-4bbd-4715-840b-e2db709f46e3/ddm7tzp-0b8788ba-90e9-4fc7-9800-432dc928588e.png/v1/fill/w_215,h_265/red_panda_pixel_art_by_tatsuyodragneel_ddm7tzp-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjY1IiwicGF0aCI6IlwvZlwvOThjYWNhMTEtNGJiZC00NzE1LTg0MGItZTJkYjcwOWY0NmUzXC9kZG03dHpwLTBiODc4OGJhLTkwZTktNGZjNy05ODAwLTQzMmRjOTI4NTg4ZS5wbmciLCJ3aWR0aCI6Ijw9MjE1In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.tLdOHy6QcQoVdYNuZV-4Suv6TDSYidufXOX4jxx7OlU', stat: ""},
        {id: 7, img: 'https://tigerbob.io/themes/tiger-icon.png', stat: ""},
        {id: 7, img: 'https://tigerbob.io/themes/tiger-icon.png', stat: ""},
        {id: 8, img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/698467c1-80bf-45c0-84c3-b65cf47847ee/deqj2b1-22952b75-386c-4491-9b30-2b97740eaa52.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY5ODQ2N2MxLTgwYmYtNDVjMC04NGMzLWI2NWNmNDc4NDdlZVwvZGVxajJiMS0yMjk1MmI3NS0zODZjLTQ0OTEtOWIzMC0yYjk3NzQwZWFhNTIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.tTxis4RpFTc-duq1hd1O9Y8IHPQd11AIvVZmrrm7SOw', stat: ""},
        {id: 8, img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/698467c1-80bf-45c0-84c3-b65cf47847ee/deqj2b1-22952b75-386c-4491-9b30-2b97740eaa52.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY5ODQ2N2MxLTgwYmYtNDVjMC04NGMzLWI2NWNmNDc4NDdlZVwvZGVxajJiMS0yMjk1MmI3NS0zODZjLTQ0OTEtOWIzMC0yYjk3NzQwZWFhNTIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.tTxis4RpFTc-duq1hd1O9Y8IHPQd11AIvVZmrrm7SOw', stat: ""}
    ].sort(() => Math.random() - 0.5))

    const [prev, setPrev] = useState(-1)
    const [selected, setSelected] = useState(0)
    const [moves, setMoves] = useState(0)
    const [win, setWin] = useState(false)

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
        {id: 1, img: 'https://i.pinimg.com/originals/d5/fa/63/d5fa636047992a12cc9c68a0e24bb846.png', stat: ""},
        {id: 1, img: 'https://i.pinimg.com/originals/d5/fa/63/d5fa636047992a12cc9c68a0e24bb846.png', stat: ""},
        {id: 2, img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c6da62d5-9811-4f21-856f-435b8c7328b9/d75aals-382bbd06-02bd-4b46-9766-d6e25e2d7f23.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M2ZGE2MmQ1LTk4MTEtNGYyMS04NTZmLTQzNWI4YzczMjhiOVwvZDc1YWFscy0zODJiYmQwNi0wMmJkLTRiNDYtOTc2Ni1kNmUyNWUyZDdmMjMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.0whltT4sNbzaDI4dakyH_-d-L-NSv7VAyb0w8ptTcX4', stat: ""},
        {id: 2, img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c6da62d5-9811-4f21-856f-435b8c7328b9/d75aals-382bbd06-02bd-4b46-9766-d6e25e2d7f23.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M2ZGE2MmQ1LTk4MTEtNGYyMS04NTZmLTQzNWI4YzczMjhiOVwvZDc1YWFscy0zODJiYmQwNi0wMmJkLTRiNDYtOTc2Ni1kNmUyNWUyZDdmMjMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.0whltT4sNbzaDI4dakyH_-d-L-NSv7VAyb0w8ptTcX4', stat: ""},
        {id: 3, img: 'https://dejpknyizje2n.cloudfront.net/marketplace/products/ffae18db02f64ed58a78bcd9c0619032.png', stat: ""},
        {id: 3, img: 'https://dejpknyizje2n.cloudfront.net/marketplace/products/ffae18db02f64ed58a78bcd9c0619032.png', stat: ""},
        {id: 4, img: 'https://static.vecteezy.com/system/resources/previews/019/527/069/original/an-8-bit-retro-styled-pixel-art-illustration-of-a-blue-fish-free-png.png', stat: ""},
        {id: 4, img: 'https://static.vecteezy.com/system/resources/previews/019/527/069/original/an-8-bit-retro-styled-pixel-art-illustration-of-a-blue-fish-free-png.png', stat: ""},
        {id: 5, img: 'https://i.redd.it/made-pixel-art-of-animal-jam-animals-when-i-got-bored-doing-v0-8lyn89iiq3ba1.png?width=1600&format=png&auto=webp&s=449ce5d9d70c47f8c0c47aed2e6c2b92a22f9631', stat: ""},
        {id: 5, img: 'https://i.redd.it/made-pixel-art-of-animal-jam-animals-when-i-got-bored-doing-v0-8lyn89iiq3ba1.png?width=1600&format=png&auto=webp&s=449ce5d9d70c47f8c0c47aed2e6c2b92a22f9631', stat: ""},
        {id: 6, img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/98caca11-4bbd-4715-840b-e2db709f46e3/ddm7tzp-0b8788ba-90e9-4fc7-9800-432dc928588e.png/v1/fill/w_215,h_265/red_panda_pixel_art_by_tatsuyodragneel_ddm7tzp-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjY1IiwicGF0aCI6IlwvZlwvOThjYWNhMTEtNGJiZC00NzE1LTg0MGItZTJkYjcwOWY0NmUzXC9kZG03dHpwLTBiODc4OGJhLTkwZTktNGZjNy05ODAwLTQzMmRjOTI4NTg4ZS5wbmciLCJ3aWR0aCI6Ijw9MjE1In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.tLdOHy6QcQoVdYNuZV-4Suv6TDSYidufXOX4jxx7OlU', stat: ""},
        {id: 6, img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/98caca11-4bbd-4715-840b-e2db709f46e3/ddm7tzp-0b8788ba-90e9-4fc7-9800-432dc928588e.png/v1/fill/w_215,h_265/red_panda_pixel_art_by_tatsuyodragneel_ddm7tzp-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjY1IiwicGF0aCI6IlwvZlwvOThjYWNhMTEtNGJiZC00NzE1LTg0MGItZTJkYjcwOWY0NmUzXC9kZG03dHpwLTBiODc4OGJhLTkwZTktNGZjNy05ODAwLTQzMmRjOTI4NTg4ZS5wbmciLCJ3aWR0aCI6Ijw9MjE1In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.tLdOHy6QcQoVdYNuZV-4Suv6TDSYidufXOX4jxx7OlU', stat: ""},
        {id: 7, img: 'https://tigerbob.io/themes/tiger-icon.png', stat: ""},
        {id: 7, img: 'https://tigerbob.io/themes/tiger-icon.png', stat: ""},
        {id: 8, img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/698467c1-80bf-45c0-84c3-b65cf47847ee/deqj2b1-22952b75-386c-4491-9b30-2b97740eaa52.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY5ODQ2N2MxLTgwYmYtNDVjMC04NGMzLWI2NWNmNDc4NDdlZVwvZGVxajJiMS0yMjk1MmI3NS0zODZjLTQ0OTEtOWIzMC0yYjk3NzQwZWFhNTIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.tTxis4RpFTc-duq1hd1O9Y8IHPQd11AIvVZmrrm7SOw', stat: ""},
        {id: 8, img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/698467c1-80bf-45c0-84c3-b65cf47847ee/deqj2b1-22952b75-386c-4491-9b30-2b97740eaa52.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY5ODQ2N2MxLTgwYmYtNDVjMC04NGMzLWI2NWNmNDc4NDdlZVwvZGVxajJiMS0yMjk1MmI3NS0zODZjLTQ0OTEtOWIzMC0yYjk3NzQwZWFhNTIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.tTxis4RpFTc-duq1hd1O9Y8IHPQd11AIvVZmrrm7SOw', stat: ""}
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