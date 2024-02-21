
# Todo Backend API

This is a simple Node.js Todo backend application that provides APIs to manage todo tasks.

## Installation

1. **Clone the repository:**

    ```bash
    https://github.com/Gauravkumar2701/todo-backend.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd todo-backend
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Start the server:**

    ```bash
    npm start
    ```

## API Endpoints

### Get all Todos

- **URL:** `/todos`
- **Method:** `GET`
- **Description:** Get a list of all todos.
- **Response:** JSON array of todo objects.

### Get a Todo

- **URL:** `/todos/:id`
- **Method:** `GET`
- **Description:** Get a specific todo by its ID.
- **Response:** JSON object of the todo.

### Create a Todo

- **URL:** `/todos`
- **Method:** `POST`
- **Description:** Create a new todo.
- **Request Body:** Refer to the todos model model.
- **Response:** JSON object of the created todo.

### Update a Todo

- **URL:** `/todos/:id`
- **Method:** `PUT`
- **Description:** Update an existing todo.
- **Request Body:** Refer to the todos model model.
- **Response:** JSON object of the updated todo.

### Delete a Todo

- **URL:** `/todos/:id`
- **Method:** `DELETE`
- **Description:** Delete an existing todo by its ID.
- **Response:** JSON object confirming deletion.


### Create a User

- **URL:** `/user`
- **Method:** `POST`
- **Description:** Create a new user.
- **Request Body:** Refer to the user model model.
- **Response:** JSON object of the created todo.

### Update a User

- **URL:** `/user/:id`
- **Method:** `PUT`
- **Description:** Update an existing todo.
- **Request Body:** Refer to the user model model.
- **Response:** JSON object of the updated todo.

### Delete a User

- **URL:** `/user/:id`
- **Method:** `DELETE`
- **Request Body:** Refer to the user model model.
- **Response:** JSON object confirming deletion.