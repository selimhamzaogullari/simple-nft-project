
function Loading({fit}) {
  return (
      <div className={`font-bold ${fit ? '' : 'h-screen'} dark:text-gray-300`}>
        Loading...
      </div>
  )
}

export default Loading
