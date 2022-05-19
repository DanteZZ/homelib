import { SetAddictions } from "./setters/setAddictions";

export const updateAddictions = () => async (dispatch, getState) => {
    const {main:{books}} = getState();
    const authors = [];
    const series = [];

    books.forEach(b=>{
        if (b.author && (authors.indexOf(b.author) < 0)) {authors.push(b.author);}
        if (b.serie && (series.indexOf(b.serie) < 0)) {series.push(b.serie);}
    });

    dispatch(SetAddictions({
        series,
        authors
    }))
}