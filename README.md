# Flataculties

Flataculties is a web app where you can vote for the cutest animal! This project aims to practice array iteration, DOM manipulation, handling events, and server communication using a local API.

## Table of Contents
- [Project Description](#project-description)
- [Project Setup](#project-setup)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Project Description

In Flataculties, users can view a list of animal names and their corresponding images. They can click on an animal's name to see its details, including the image and the number of votes received. Users also have the ability to add votes for each animal, which will be displayed alongside the animal's details.

The project uses a local API server to fetch and update data. The server is set up using the `json-server` package and a `db.json` file that stores the animal data.

## Project Setup

To set up the project locally, follow these steps:

1. Clone the repository:

2. Install the project dependencies:

3. Start the development server:

4. Open your browser and visit `http://localhost:3000` to access the Flataculties web app.

## Usage

- On the home page, you will see a list of animal names. Click on a name to view the details of that animal, including the image and number of votes.

- To add votes for an animal, click on the "+1 Vote" button on the animal's details page. The updated vote count will be displayed immediately.

- You can also reset the votes for all animals to zero by clicking the "Reset Votes" button.

- To add a new animal, fill out the form on the "Add Animal" page and submit the form. The new animal will be added to the list with zero votes.

## API Endpoints

The project uses the following API endpoints:

- `GET /characters`: Retrieve the list of all animals and their details.
- `GET /characters/:id`: Retrieve the details of a specific animal by ID.
- `POST /characters`: Add a new animal to the list.

## Contributing

Contributions to the Flataculties project are welcome! If you have any ideas, improvements, or bug fixes, please feel free to submit a pull request.

1. Fork the repository.
2. Create a new branch for your feature/fix:
3. Commit your changes and push the branch:
4. Open a pull request in the repository and provide a detailed description of your changes.
   
## How the website is suppost to look
![Screenshot from 2023-10-03 14-23-45](https://github.com/swarui/phase-1-wk2-code-challenge/assets/135341074/9858a288-fc17-41f8-a700-849461a343e6)
![Screenshot from 2023-10-03 14-37-24](https://github.com/swarui/phase-1-wk2-code-challenge/assets/135341074/edcf9e32-724f-4327-a6a5-f029b2178a29)

## Author

- Steve Maina

## License

MIT License

Copyright (c) 2023 swarui

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
