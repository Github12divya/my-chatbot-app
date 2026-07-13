from pydantic import BaseModel
from typing import Optional

class RegisterModel(BaseModel):
    name: str
    email: str
    password: str

class LoginModel(BaseModel):
    email: str
    password: str

class ChatModel(BaseModel):
    user_message: str
    bot_reply: str
