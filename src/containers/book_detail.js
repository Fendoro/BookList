import BookDetail from "../components/book_detail";
import {connect} from "react-redux";

function mapStateToProps(state) {
    return {
        book: state.activeBook
    };
}

export default connect(mapStateToProps)(BookDetail);