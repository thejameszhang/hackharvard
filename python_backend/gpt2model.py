# Importing model and tokenizer
from transformers import XLMWithLMHeadModel, XLMTokenizer

original_text = ""

# Instantiating the model and tokenizer 
tokenizer = XLMTokenizer.from_pretrained('xlm-mlm-en-2048')
model = XLMWithLMHeadModel.from_pretrained('xlm-mlm-en-2048')

# Encoding text to get input ids & pass them to model.generate()
inputs = tokenizer.batch_encode_plus([original_text],return_tensors='pt',max_length=512)
summary_ids = model.generate(inputs['input_ids'],early_stopping=True)

# Decode and print the summary
XLM_summary = tokenizer.decode(summary_ids[0],skip_special_tokens=True)
print(XLM_summary)