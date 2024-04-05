import cls from './Pagination.module.css';

const Pagination = ({handleNextPage, handlePrevPage, handlePageClick, totalPages, currentPage}) => {
    return (
        <div className={cls.pagination}>
            <button onClick={handlePrevPage} disabled={currentPage === 1}>{'<'}</button>
            <div className={cls.pagination_number}>
                {[...Array(totalPages)].map((_, index) => {
                    return <button onClick={() => handlePageClick(index + 1)} key={index}
                                   disabled={currentPage === index + 1}>{index + 1}</button>
                })}
            </div>
            <button onClick={handleNextPage} disabled={currentPage === totalPages}>{'>'}</button>
        </div>
    );
}
export default Pagination;