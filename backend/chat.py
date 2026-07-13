from fastapi import APIRouter, Depends
from models import ChatModel
from database import get_connection
from middleware import verify_token

router = APIRouter()

@router.post("/save")
def save_chat(data: ChatModel, user=Depends(verify_token)):
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute(
        "INSERT INTO conversations (user_id, user_message, bot_reply) VALUES (%s, %s, %s)",
        (user["id"], data.user_message, data.bot_reply)
    )
    conn.commit()
    cursor.close()
    conn.close()
    return {"message": "Saved"}

@router.get("/history")
def get_history(user=Depends(verify_token)):
    conn = get_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute(
        "SELECT * FROM conversations WHERE user_id = %s ORDER BY created_at DESC",
        (user["id"],)
    )
    rows = cursor.fetchall()
    cursor.close()
    conn.close()
    return rows
