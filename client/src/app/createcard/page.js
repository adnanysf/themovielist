'use client'
import style from './create.module.css'
import '../styles.css'
import { useState } from 'react'

export default function CreateCard() {
    const [movietitle, setMovieTitle] = useState("")
    const [movieRanks, setMovieRanks] = useState([])
    const [currMovie, setCurrMovie] = useState("")
    const [currentIndex, setCurrentIndex] = useState(0)

    const titleChange = (event) => {
        setMovieTitle(event.target.value)
    }

    const handleNext = () => {
        if (currentIndex < movieRanks.length - 1) {
            setCurrentIndex(currentIndex + 1)
            setCurrMovie(movieRanks[currentIndex + 1])
        } else {
            setCurrentIndex(movieRanks.length)
            setCurrMovie("")
        }
    }

    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1)
            setCurrMovie(movieRanks[currentIndex - 1])
        }
    }

    const handleAdd = () => {
        if (currMovie !== "") {
            const updatedRanks = [...movieRanks]
            updatedRanks[currentIndex] = currMovie
            setMovieRanks(updatedRanks)
            setCurrMovie("")
        }
    }
    
    const handleRemove = () => {
        if (currentIndex < movieRanks.length) {
            const updatedRanks = [...movieRanks]
            updatedRanks.splice(currentIndex, 1)
            setMovieRanks(updatedRanks)
            if (currentIndex >= updatedRanks.length) {
                setCurrentIndex(updatedRanks.length - 1)
                setCurrMovie(updatedRanks[updatedRanks.length - 1] || "")
            } else {
                setCurrMovie(updatedRanks[currentIndex] || "")
            }
        }
    }

    return (
        <div className={style.app}>
            <div className={style.left}>
                <h1 className='title'>Create List.</h1>
                <div className={style.titlecontainer}>
                    <textarea placeholder='Movie Title' className={style.movietitle} onChange={titleChange}></textarea>
                </div>
                <div className={style.save}><h3>Save</h3></div>
                <div className={style.update}><h3>Export</h3></div>
            </div>
            <div className={style.cont}>
                <div className={style.front}>
                    {movietitle}
                </div>
                <div className={style.back}>
                    <h1>Rank</h1>
                    <div className={style.rankcontainer}>
                        <textarea
                            style={{border: "none", backgroundColor: "transparent", color: "black", fontSize: "1.5rem", width: "90%", height: "50%",
                                outline: "none", textAlign: "center", padding: "0.5rem 0.5rem", wordBreak: "break-word", resize: "none",
                                fontFamily: "inherit", boxShadow: "none", borderRadius: "0.5rem", overflowWrap: "break-word", whiteSpace: "pre-wrap"
                            }}
                            type="text"
                            placeholder={movieRanks[currentIndex] || "Enter Movie Title"}
                            className={style.rank}
                            value={currMovie}
                            onChange={(e) => setCurrMovie(e.target.value)}
                        />
                        <div style={{cursor: 'pointer'}} onClick={handleAdd} className={style.add}>+</div>
                        <div style={{cursor: 'pointer'}} onClick={handleRemove} className={style.remove}>-</div>
                        <div style={{cursor: 'pointer'}} onClick={handleNext}>Next</div>
                        <div style={{cursor: 'pointer'}} onClick={handlePrevious}>Previous</div>
                    </div>
                </div>
            </div>
        </div>
    )
}