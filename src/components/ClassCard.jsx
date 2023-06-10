
const ClassCard = ({item}) => {
    const {image, name, instructor, available_seats, price} = item;
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={image} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <h2 className="card-title">Instructor: {instructor}</h2>
                    <p>Available sets: {available_seats}</p>
                    <p>Price : {price}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;