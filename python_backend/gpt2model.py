# Importing model and tokenizer
from transformers import GPT2Tokenizer, GPT2LMHeadModel

#this needs to be data driven - whatever the user highlights/wants to zoom in or out of
original_text = ""

# Instantiating the model and tokenizer with gpt-2
tokenizer = GPT2Tokenizer.from_prerained('gpt2')
model=GPT2LMHeadModel.from_pretrained('gpt2')

# Encoding text to get input ids & pass them to model.generate() - this max length param should
# also be customized
inputs = tokenizer.batch_encode_plus([original_text],return_tensors='pt',max_length=512)
summary_ids=model.generate(inputs['input_ids'],early_stopping=True)

# Decoding and printing summary
GPT_summary = tokenizer.decode(summary_ids[0],skip_special_tokens=True)
print(GPT_summary)