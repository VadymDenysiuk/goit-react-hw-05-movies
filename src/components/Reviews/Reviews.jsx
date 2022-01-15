import { useState, useEffect } from "react";
import { useParams, useRouteMatch } from "react-router-dom";
import * as filmsApi from '../../services/FilmsApi'

export default function Cast() {
  const [reviews, setReviews] = useState(null)
  const { movieId } = useParams()
  useEffect(() => {
    filmsApi.fetchReviews(movieId).then(setReviews)
    
  }, [movieId])
  return (
    <>
     <ul>
        {reviews && reviews.map(review => <li key={review.id}>
          <h4>{review.author}</h4>
          <p>{review.content}</p>
        </li>)}

      </ul>

      {reviews && reviews.length < 1 &&  <p>No any reviews about this movie</p>}
    </>
  )
 }