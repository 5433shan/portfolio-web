---
title: "NLP Sentiment Analysis Pipeline"
slug: "nlp-sentiment-analysis"
summary: "Developed a production-grade NLP pipeline processing 100K+ customer reviews with 91% sentiment accuracy using BERT transformers."
techStack: ["Python", "PyTorch", "Transformers", "BERT", "FastAPI", "Redis"]
repoUrl: "https://github.com/janedoe/sentiment-analysis"
featured: false
order: 2
date: "2024-06"
image: "/images/projects/sentiment-analysis.svg"
---

## Overview

Built an end-to-end NLP pipeline to analyze customer feedback for an e-commerce platform. The system processes product reviews, support tickets, and social media mentions to identify sentiment trends and actionable insights.

## Technical Implementation

### Model Architecture
- Fine-tuned **BERT-base-uncased** on domain-specific customer review data
- Used Hugging Face Transformers library for model training and inference
- Achieved 91% accuracy on multi-class sentiment (positive, neutral, negative)

### Data Processing
- Preprocessed 100K+ reviews with text cleaning and normalization
- Handled emoji conversion, slang detection, and multilingual content
- Implemented stratified sampling for balanced training data

### Production Pipeline
- FastAPI REST endpoints for real-time sentiment scoring
- Redis caching for frequently analyzed products (40% cache hit rate)
- Batch processing for historical data analysis

## Results

- **91% sentiment accuracy** across three sentiment classes
- **Processing speed**: 50ms average latency per review
- **Scalability**: Handles 10K+ reviews/day in production
- **Business impact**: Identified 15% improvement opportunity in customer support

## Code Snippet

```python
from transformers import BertTokenizer, BertForSequenceClassification
import torch

# Load fine-tuned model
model = BertForSequenceClassification.from_pretrained('./models/sentiment-bert')
tokenizer = BertTokenizer.from_pretrained('bert-base-uncased')

# Predict sentiment
def predict_sentiment(text):
    inputs = tokenizer(text, return_tensors='pt', padding=True, truncation=True, max_length=512)
    with torch.no_grad():
        outputs = model(**inputs)
        predictions = torch.nn.functional.softmax(outputs.logits, dim=-1)
        sentiment = torch.argmax(predictions, dim=1).item()

    sentiment_map = {0: 'negative', 1: 'neutral', 2: 'positive'}
    return sentiment_map[sentiment], predictions[0][sentiment].item()

# Example usage
text = "This product exceeded my expectations! Highly recommend."
sentiment, confidence = predict_sentiment(text)
print(f"Sentiment: {sentiment}, Confidence: {confidence:.2%}")
```
