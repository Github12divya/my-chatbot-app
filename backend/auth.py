from fastapi import APIRouter, HTTPException
from models import RegisterModel, LoginModel
from database import get_connection
from jose import jwt
from dotenv import load_dotenv
import bcrypt, os

load_dotenv()
router = APIRouter()

@router.post("/register")
def register(data: RegisterModel):
    hashed = bcrypt.hashpw(data.password.encode(), bcrypt.gensalt()).decode()
    conn = get_connection()
    cursor = conn.cursor()
    try:
        cursor.execute(
            "INSERT INTO users (name, email, password) VALUES (%s, %s, %s)",
            (data.name, data.email, hashed)
        )
        conn.commit()
        return {"message": "User registered successfully"}
    except Exception:
        raise HTTPException(status_code=400, detail="Email already exists")
    finally:
        cursor.close()
        conn.close()

@router.post("/login")
def login(data: LoginModel):
    conn = get_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT * FROM users WHERE email = %s", (data.email,))
    user = cursor.fetchone()
    cursor.close()
    conn.close()

    if not user:
        raise HTTPException(status_code=401, detail="User not found")
    if not bcrypt.checkpw(data.password.encode(), user["password"].encode()):
        raise HTTPException(status_code=401, detail="Wrong password")

    token = jwt.encode({"id": user["id"]}, os.getenv("JWT_SECRET"), algorithm="HS256")
    return {
        "token": token,
        "user": {
            "id": user["id"],
            "name": user["name"],
            "email": user["email"]
        }
    }
