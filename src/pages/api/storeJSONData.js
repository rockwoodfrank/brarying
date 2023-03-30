import fsPromises from 'fs/promises';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'json/data.json');

function filterTime(data)
{
    let outputData = [];
    for (let i=0; i<data.length; i++)
    {
        outputData.push(data[i].filter(location => location.time_exp > Date.now()))
    }
    return outputData;
}

export default async function handler(req, res) {

  if (req.method === 'GET') {
    // Read the existing data from the JSON file
    const jsonData = await fsPromises.readFile(dataFilePath);
    const objectData = JSON.parse(jsonData);
    const filteredData = filterTime(objectData);
    //await fsPromises.writeFile(dataFilePath, JSON.stringify(filteredData));

    res.status(200).json(filteredData);
  } else if (req.method === 'POST') {
    try {
        // Read the existing data from the JSON file
        const jsonData = await fsPromises.readFile(dataFilePath);
        const objectData = JSON.parse(jsonData);

        // Get the data from the request body
        const { name, xPos, yPos, color, time_exp, key, floor } = req.body;

        // Add the new data to the object
        const newData = {
            name,
            xPos,
            yPos,
            color,
            time_exp,
            key
        };
        objectData[floor].push(newData);

        // Convert the object back to a JSON string
        const updatedData = JSON.stringify(objectData);

        // Write the updated data to the JSON file
        await fsPromises.writeFile(dataFilePath, updatedData);

        // Send a success response
        res.status(200).json({ message: 'Data stored successfully' });
    } catch (error) {
        console.error(error);
        // Send an error response
        res.status(500).json({ message: 'Error storing data' });
    }
  }
}