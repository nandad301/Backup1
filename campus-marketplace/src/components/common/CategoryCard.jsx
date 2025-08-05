import { Link } from "react-router-dom"

const CategoryCard = ({ category }) => {
  return (
    <Link
      to={`/category/${category.id}`}
      className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 group"
    >
      <div className="w-16 h-16 bg-atrace-orange-light rounded-full flex items-center justify-center mb-4 group-hover:bg-atrace-orange transition-colors">
        <category.icon className="w-8 h-8 text-atrace-orange group-hover:text-white" />
      </div>
      <h3 className="font-medium text-gray-800 text-center">{category.name}</h3>
      <p className="text-sm text-gray-600 text-center mt-1">({category.count} items)</p>
    </Link>
  )
}

export default CategoryCard
