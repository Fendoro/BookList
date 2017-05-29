import React, { Component } from "react";

export default class BookDetail extends Component {
    render() {
        const book = this.props.book;
        if (book == null) {
            return <div>Select book!</div>;
        }
        return (
            <div>
                <h3>Details for:</h3>
                <div>Title: {book.title}</div>
                <div>Pages: {book.pages}</div>
            </div>
        );
    }
}