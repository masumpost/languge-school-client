
const TeachersCard = ({teacher}) => {
    const {Image, Name, Email} = teacher;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img className="w-full h-56" src={Image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name: {Name}</h2>
                    <h4 className="card-title">Email: {Email}</h4>
                </div>
            </div>
        </div>
    );
};

export default TeachersCard;