import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { getComments } from "./commentsFunctions"

export const Comments = () => {
    const [comments, modifyComments] = useState([])
    const history = useHistory

    useEffect(
        () => {
            getComments()
                .then(response => modifyComments(response))
        },
        []
    )

        return (
            <>

                    {
                        comments.map(
                            (comment) => {
                                return <h2 key={comment.post.title}></h2>
                                
                            }
                        <div key={`comment--${comment.id}`}>{comment.content}>
                            <button className="comment__button" onClick={() => createComment(comment.id)}>Comment</button>
                        </div>
            </>
        )
}