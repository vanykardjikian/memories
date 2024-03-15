import PropTypes from 'prop-types';

function ConfirmationDialog(props) {
    const handleDelete = () => {
        props.confirmDelete(true);
    };

    const handleCancel = () => {
        props.confirmDelete(false);
    };

    return (
        <div className="delete-popup form-popup">
            <div className="form-popup-inner">
            <button className='x-btn' onClick={handleCancel}><i className='bx bx-x'></i></button>
                <h3>Are you sure you want to delete this card?</h3>
                <div className='delete-popup-btns'>
                    <button className='delete-btn' onClick={handleDelete}>Delete</button>
                    <button className='cancel-btn' onClick={handleCancel}>Cancel</button>
                </div>
            </div>
        </div>
    );
}

ConfirmationDialog.propTypes = {
    confirmDelete: PropTypes.func,
};

export default ConfirmationDialog;
