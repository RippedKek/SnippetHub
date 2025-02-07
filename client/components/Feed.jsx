import Post from './Post'

const Feed = () => {
  const snippets = [
    {
      name: 'Tanjeeb Mehheran',
      username: 'rippedkek',
      title: 'Linear Regression',
      language: ['python'],
      snippet: `
        from sklearn.model_selection import LinearRegressor

        reg = LinearRegressor()
        reg.fit(X_train, y_train)
        pred = reg.predict(X_test)

        plt.scatter(X_test, y_test)
        plt.plot(X_test, pred, color=”red”)
        plt.show()
      `,
    },
    {
      name: 'Masnun Nuha',
      username: 'nuha14',
      title: 'Axios Get',
      language: ['javascript', 'react'],
      snippet: `
        const getUser = async (id) => {
          try {
            const response = await  axios.get(getURL, {_id: id});
            if(response.data){
              setUser(response.data.user);
            }
          } catch (err) {
            console.log(err)
          }
        }
      `,
    },
  ]

  return (
    <div className='w-[70%] px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 grid grid-cols-1 lg:grid-cols-2 md:w-full bg-body border-[12px] border-t-0 border-black min-h-[calc(100vh-118px)] overflow-x-auto'>
      {snippets.map((item, index) => {
        return <Post key={index} post={item} />
      })}
    </div>
  )
}

export default Feed
