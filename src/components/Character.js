import {Link} from "react-router-dom";

function Character({name, img, id}) {
  return (
      <Link to={`/details/${id}`}>
        <figure className="bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition cursor-pointer">
          <img className="mx-auto rounded-xl" src={img} alt={name} />
          <div className="pt-6 text-center space-y-4">
            <figcaption className="text-base truncate">
              {name}
            </figcaption>
          </div>
        </figure>
      </Link>
  )
}

export default Character
