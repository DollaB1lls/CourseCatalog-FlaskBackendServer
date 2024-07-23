# Set up for mongoDB

from fastapi import FastAPI
from motor.motor_asyncio import AsyncIOMotorClient


MONGO_URI = "mongodb://localhost:27017/"

app = FastAPI()

client = AsyncIOMotorClient(MONGO_URI)
db = client['iupcosc']
collection = db['iupcosc']


@app.get("/get_data")
async def get_data():
    result = []
    async for doc in collection.find():
        result.append(doc['course_name'])
    return {"data": result}





