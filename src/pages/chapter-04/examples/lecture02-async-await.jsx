/* eslint-disable */
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

/**
 *  Sử dụng async/await trong useEffect
 */
const GetApiPost = () => {
    const [Posts, SetDataPost] = useState([])
    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
                if (!response) throw new Error('Không lấy đc response')
                SetDataPost(response.data)
            } catch (err) {
                console.log('lỗi: ', err)
            }
        })()
    }, [])
    return (
        <React.Fragment>
            <span>---- Post data ----</span>
            {Posts.length > 0 && (
                <ul>
                    {Posts.map((post) => (
                        <li key={post.id}> {post.id} - {post.title} </li>
                    ))}
                </ul>
            )}
        </React.Fragment>
    )
}

/**
 *  Xử lý lỗi bằng try/catch
 */
const GetApiUser = () => {
    const [Users, SetUserData] = useState([])
    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users')
                if (!response) throw new Error('Lỗi')
                SetUserData(response.data)
            } catch (err) {
                console.log('Lỗi: ', err)
            }
        })()
    }, [])
    return (
        <React.Fragment>
            <span>---- User data ----</span>
            {Users.length > 0 && (
                <ul>
                    {Users.map((user) => (
                        <li key={user.id}> {user.id} - {user.name} - {user.email} </li>
                    ))}
                </ul>
            )}
        </React.Fragment>
    )
}

/**
 *  Tách logic ra khỏi useeffect
 */
const GetApiAlbums = () => {
    const [Albums, SetAlbums] = useState([])
    const GetAlbums = async () => {
        try{
            const response = await axios.get('https://jsonplaceholder.typicode.com/albums')
            if (!response) throw new Error('Lỗi!')
            SetAlbums(response.data) 
        }catch(err){
            console.log('Lỗi: ', err)
        }
    }
    useEffect(() => {
        GetAlbums()
    }, []) 
    return (
        <React.Fragment>
            <span>---- Albums data ----</span>
            {Albums.length > 0 && (
                <ul>
                    {Albums.map((albums) => (
                        <li key={albums.id}> {albums.id} - {albums.title} </li>
                    ))}
                </ul>
            )}
        </React.Fragment>
    )
}

const AsyncFuntion = () => {
    return (
        <React.Fragment>
            <GetApiPost></GetApiPost><br />
            <GetApiUser></GetApiUser><br />
            <GetApiAlbums></GetApiAlbums><br />
        </React.Fragment>
    )
}

export default AsyncFuntion