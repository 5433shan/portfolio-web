---
title: "Customer Churn Prediction Model"
slug: "customer-churn-prediction"
summary: "Built a machine learning pipeline to predict customer churn with 92% accuracy, reducing retention costs by 15% and saving $200K annually."
techStack: ["Python", "Scikit-learn", "XGBoost", "Docker", "FastAPI", "SMOTE"]
repoUrl: "https://github.com/janedoe/churn-prediction"
demoUrl: "https://churn-demo.example.com"
featured: true
order: 1
date: "2024-08"
image: "/images/projects/churn-prediction.svg"
---

## Overview

This project addresses customer churn for a SaaS company with 50K+ users. Traditional rule-based approaches had 65% accuracy; our ML model achieved 92% precision and 88% recall, identifying at-risk customers before they leave.

## Technical Approach

### Data Pipeline
- Cleaned 2M+ customer records using pandas
- Handled class imbalance (8% churn rate) with SMOTE oversampling
- Created robust train/validation/test splits with stratification

### Feature Engineering
Created 35 predictive features including:
- User engagement metrics (login frequency, feature adoption)
- Billing patterns (payment delays, plan changes)
- Support interactions (ticket volume, resolution time)
- Usage trends (7-day, 30-day, 90-day rolling averages)

### Model Selection
Compared multiple algorithms:
- **Logistic Regression**: 78% precision (baseline)
- **Random Forest**: 85% precision
- **XGBoost**: 92% precision, 88% recall (final model)

Optimized hyperparameters using Bayesian optimization with 5-fold cross-validation.

### Deployment
- Containerized model with Docker for reproducible environments
- Served predictions via FastAPI with <50ms latency
- Implemented batch scoring for daily risk assessments

## Impact

- **15% reduction** in churn rate in first quarter post-deployment
- **$200K annual savings** in retention marketing costs
- **Proactive outreach** enabled for high-risk users (>80% churn probability)
- **Real-time dashboard** for customer success team

## Challenges & Solutions

**Challenge**: Severe class imbalance (only 8% churn rate)

**Solution**: Applied SMOTE for synthetic minority oversampling + adjusted decision threshold to optimize F1-score instead of raw accuracy.

**Challenge**: Model drift over time as user behavior patterns changed

**Solution**: Implemented weekly automated retraining pipeline with performance monitoring. Set up alerts when model precision drops below 88%.

## Code Example

```python
import xgboost as xgb
from sklearn.model_selection import cross_val_score

# Train XGBoost model with optimized hyperparameters
model = xgb.XGBClassifier(
    max_depth=6,
    learning_rate=0.1,
    n_estimators=200,
    scale_pos_weight=11.5,  # Address class imbalance
    random_state=42
)

# 5-fold cross-validation
scores = cross_val_score(model, X_train, y_train, cv=5, scoring='f1')
print(f"Cross-validation F1: {scores.mean():.3f} (+/- {scores.std():.3f})")

# Train on full training set
model.fit(X_train, y_train)
```

## Lessons Learned

1. **Feature importance analysis** revealed support ticket volume as the strongest churn predictor, leading to improved customer support workflows
2. **SMOTE oversampling** dramatically improved recall without sacrificing precision
3. **Weekly retraining** is essential for maintaining model performance as user behavior evolves
