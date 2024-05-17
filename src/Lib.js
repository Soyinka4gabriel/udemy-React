import './Card.css';
const Lib = () => {
    return ( 
        <div className="con">
            <Book BookTitle="Queen Zee" BookAuthor="Small God" BookDescription="lorem auysd uydc qwdiyq dwxuydvx qwidux qwidxuvqwk dxqw7idxuvc wqc7iqwduvc qw" BookDate="20/10/2024"/>
            <Book BookTitle="Captain Zee" BookAuthor="Small God" BookDescription="lorem auysd uydc qwdiyq dwxuydvx qwidux qwidxuvqwk dxqw7idxuvc wqc7iqwduvc qw" BookDate="20/10/2024"/>
            <Book BookTitle="Godziler Zee" BookAuthor="Small God" BookDescription="lorem auysd uydc qwdiyq dwxuydvx qwidux qwidxuvqwk dxqw7idxuvc wqc7iqwduvc qw" BookDate="20/10/2024"/>

        </div>
     );
}

const Book =(props)=>{
    return(
    <div className="card">
        <h2>Book Title : {props.BookTitle}</h2>
        <h2>Book Author : {props.BookAuthor}</h2>
        <p>Book Description : {props.BookDescription}</p>
        <p>Book Date : {props.BookDate}</p><br/><hr/>
    </div>
    );
}
 
 
export default Lib;