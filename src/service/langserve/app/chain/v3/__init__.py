from ..base import BaseChain
from langchain_openai.chat_models import ChatOpenAI

class ChainV3(BaseChain): #gpt-3.5-turbo
	def __init__(self, history_id, template):
		super().__init__(history_id, template, ChatOpenAI(model_name='gpt-3.5-turbo'))