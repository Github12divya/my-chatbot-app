from fastapi import Header, HTTPException
from jose import jwt, JWTError
from dotenv import load_dotenv
import os

load_dotenv()

def verify_token(authorization: str = Header(...)):
    try:
        token = authorization.split(" ")[1]  # Bearer <token>
        payload = jwt.decode(token, os.getenv("JWT_SECRET"), algorithms=["HS256"])
        return payload  # contains user id
    except (JWTError, IndexError):
        raise HTTPException(status_code=401, detail="Invalid or missing token")
