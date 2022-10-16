# Importing requirements
from transformers import T5Tokenizer, T5Config, T5ForConditionalGeneration

# Instantiating the model and tokenizer 
# my_model = T5ForConditionalGeneration.from_pretrained('t5-small')
# tokenizer = T5Tokenizer.from_pretrained('t5-small')

# text to summarize
#this needs to be data driven - whatever the user highlights/wants to zoom in or out of
original_text = "Areas of the Service allow you to submit, post, upload, publish, submit, transfer, link, display, or otherwise make available (hereinafter, post) information, text, graphics, photograph, audio, video, postings, reviews, designs, inventions, or other materials (User Content) that may or may not be viewable by other Users. User Content must comply with these Terms. You retain ownership of all intellectual property rights you have in the User Content you post on the Service. By posting User Content on or through the Service, you grant Piazza a worldwide, irrevocable, perpetual, non-exclusive, transferable, royalty-free license (with the right to sublicense) to use, copy, reproduce, process, adapt, modify, publish, transmit, display, distribute, and otherwise exploit such User Content in any format or medium now known or developed in the future, in order to provide the Service subject to applicable law and our Privacy Policy. Your User Content will not be used for publicity, advertising, or any public statements without your prior consent. In the interest of clarity, the license granted to Piazza shall survive termination of the Service or your Account. Notwithstanding the license granted to Piazza in User Content and for avoidance of doubt, our use and retention of your personal data, including any that is contained in User Content, shall also be governed by and comply with the Piazza Privacy Policy. You represent, warrant and agree that you have the necessary rights to grant us the license described in this Section for any User Content that you post. You agree that this license includes the right for other Users with permitted access to your User Content to use your User Content in conjunction with participation in the Service and as permitted through the functionality of the Service. Your User Content will be viewable by other Users of the Service. You should only provide User Content that you are comfortable sharing with others under these Terms. Piazza takes no responsibility and assumes no liability for any User Content that you or any other User or third- party posts. You shall be solely responsible for your own User Content and the consequences of posting or publishing it, and you agree that we are only acting as a passive conduit for your online distribution and publication of your User Content. Piazza reserves the right in its sole discretion to remove or disable access to any User Content from the Service, suspend or terminate your account at any time, or pursue any other remedy or relief available under equity or law if you post any User Content that violates these Terms or we consider to be objectionable for any reason. You agree that Piazza may proofread, summarize, or otherwise edit and/or withdraw your User Content (but does not assume the obligation), and you understand it remains your sole responsibility to monitor your User Content and ensure that such edited content is accurate and consistent with your representations and warranties in these Terms. Piazza reserves the right to access, read, preserve, and disclose any information as we reasonably believe is necessary to (i) satisfy any applicable law, regulation, legal process, or governmental request, (ii) enforce the Terms, including investigation of potential violations hereof, (iii) detect, prevent, or otherwise address fraud, security, or technical issues, (iv) respond to user support requests, or (v) protect the rights, property or safety of Piazza, its users and the public. You understand that Piazza does not control, and is not responsible for, User Content, and that by using the Service, you may be exposed to User Content from other Users that is offensive, indecent, inaccurate, misleading, or otherwise objectionable. Please also note that User Content may contain typographical or other inadvertent errors or inaccuracies."

# # Concatenating the word "summarize:" to raw text
# text = "summarize:" + original_text

# # encoding the input text
# input_ids=tokenizer.encode(text, return_tensors='pt', max_length=512)

# # Generating summary ids
# summary_ids = my_model.generate(input_ids, max_length=100)

# # Decoding the tensor and printing the summary.
# t5_summary = tokenizer.decode(summary_ids[0])
# print(t5_summary)

class T5Model:
    def __init__(self):
        self.model = T5ForConditionalGeneration.from_pretrained('t5-small')
        self.tokenizer = T5Tokenizer.from_pretrained('t5-small')

    def summarize(self, text):
        text = "summarize:" + text
        input_ids = self.tokenizer.encode(text, return_tensors='pt', max_length=512)
        summary_ids = self.model.generate(input_ids, max_length=128)
        t5_summary = self.tokenizer.decode(summary_ids[0])
        return t5_summary

print(T5Model().summarize(original_text))