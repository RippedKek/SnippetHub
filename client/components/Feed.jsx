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
  ]

  return (
    <div className='w-[70%] md:w-full bg-body border-[12px] border-t-0 border-black min-h-[calc(100vh-118px)] overflow-x-auto'>
      <div>Feed</div>
    </div>
  )
}

export default Feed
