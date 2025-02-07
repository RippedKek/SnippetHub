import Post from './Post'

const Feed = () => {
  const snippets = [
    {
      name: 'Tanjeeb Mehheran',
      username: 'rippedkek',
      title: 'Linear Regression',
      language: ['python'],
      description: `
      This script demonstrates training a linear regression model using sklearn's LinearRegression and visualizing the results using matplotlib. It trains the model on the provided training data (X_train and y_train), makes predictions on the test data (X_test), and plots both the actual data points and the predicted regression line. The visualization helps compare the predicted results with the actual test data.
    `,
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
      description: `
      The getUser function is an asynchronous function that retrieves user data from a server by making a GET request using axios. It accepts a user ID (id) as a parameter, fetches the corresponding user data, and updates the state with the fetched user information. If an error occurs during the request, it is caught and logged to the console.
    `,
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
    {
      name: 'Nabila Newaz',
      username: 'nabila_dev',
      title: 'Basic HTML Template',
      language: ['html', 'css'],
      description: `
      This snippet demonstrates a basic HTML template structure with a header, body, and footer. The header includes the website's title, the body contains a sample paragraph, and the footer displays contact information. It is a simple and clean structure for any web project.
    `,
      snippet: `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Basic HTML Template</title>
          <link rel="stylesheet" href="styles.css">
        </head>
        <body>
          <header>
            <h1>Welcome to My Website</h1>
          </header>
          <main>
            <p>This is a sample paragraph in the body of the webpage.</p>
          </main>
          <footer>
            <p>Contact us: contact@example.com</p>
          </footer>
        </body>
      </html>
    `,
    },
    {
      name: 'Alif Hasnain',
      username: 'alifh_tech',
      title: 'Node.js Server Setup',
      language: ['javascript', 'node.js'],
      description: `
      This snippet demonstrates setting up a simple HTTP server using Node.js and the built-in 'http' module. The server listens on port 3000 and responds with "Hello, World!" to every request.
    `,
      snippet: `
      const http = require('http');

      const server = http.createServer((req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello, World!');
      });

      server.listen(3000, '127.0.0.1', () => {
        console.log('Server running at http://127.0.0.1:3000/');
      });
    `,
    },
  ]

  return (
    <div className='w-[70%] pb-8 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 grid grid-cols-1 lg:grid-cols-2 md:w-full bg-body border-[12px] border-t-0 border-black min-h-[calc(100vh-118px)] overflow-y-scroll'>
      {snippets.map((item, index) => {
        return <Post key={index} post={item} />
      })}
    </div>
  )
}

export default Feed
