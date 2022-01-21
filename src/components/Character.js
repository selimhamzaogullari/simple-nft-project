import {Link} from "react-router-dom";

function Character({name, img, id}) {
  return (
      <Link to={`details/${id}`} data-testid={`link-${id}`}>
        <figure className="bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition cursor-pointer dark:bg-dark-card-bg">
          <img className="mx-auto rounded-xl" src={img} alt={name} />
          <div className="pt-6 text-center space-y-4">
            <figcaption className="text-base truncate">
              <span className="dark:text-gray-300">{name}</span>
            </figcaption>
          </div>
        </figure>
      </Link>
  )
}

export default Character
