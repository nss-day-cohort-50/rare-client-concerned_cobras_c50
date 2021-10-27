import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { Posts } from "../posts/Posts"
export const comments = () => {
    const [comments, updateComments] = useState([])
    history = useHistory

    useEffect(
        () => {
            fetch("http://localhost:8088/comments?_expand=postId")
                .then(response => response.json())
                .then((comments) => {
                    updateComments(comments)
                })
        },
        []
    )
    const deleteComment = (id) => {
        fetch(`http://localhost:8088/comments/${id}`, {
            method: "DELETE"
        })
            .then(() => {
                return fetch("http://localhost:8088/comments")
                    .then((comments) => {
                        updateComments(comments)
                    })
            })

        return (
            <>

            </>
        )
    }