---
title: "Predictive Maintenance with LSTM Networks"
slug: "predictive-maintenance-lstm"
summary: "Built a predictive maintenance system using LSTM networks, reducing unplanned downtime by 18% across 15 production lines and saving $850K annually."
techStack: ["Python", "TensorFlow", "LSTM", "Keras", "Pandas", "Matplotlib"]
repoUrl: "https://github.com/janedoe/predictive-maintenance"
featured: true
order: 4
date: "2024-01"
image: "/images/projects/predictive-maintenance.svg"
---

## Overview

Developed a time-series forecasting system to predict equipment failures before they occur. The LSTM-based model analyzes sensor data from IoT devices to identify anomalies and forecast maintenance needs.

## Technical Implementation

### Data Collection
- Aggregated data from **50M+ IoT sensor events** daily
- Monitored temperature, vibration, pressure, and power consumption
- Implemented real-time data pipeline with Apache Kafka

### LSTM Model Architecture
- **3-layer LSTM** network with dropout regularization
- **Sequence length**: 24 hours of sensor readings
- **Prediction horizon**: 7-day failure probability forecast

### Feature Engineering
- Created rolling statistics (mean, std, min, max) over multiple time windows
- Engineered domain-specific features (temperature delta, vibration spikes)
- Normalized time-series data for stable training

## Results

- **18% reduction** in unplanned downtime across 15 production lines
- **$850K annual savings** from avoided emergency repairs
- **7-day advance warning** enables scheduled maintenance
- **Processing 50M+ sensor events daily** in real-time

## Code Example

```python
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import LSTM, Dense, Dropout

# Build LSTM model
model = Sequential([
    LSTM(128, return_sequences=True, input_shape=(24, 10)),  # 24 hours, 10 sensors
    Dropout(0.2),
    LSTM(64, return_sequences=True),
    Dropout(0.2),
    LSTM(32),
    Dropout(0.2),
    Dense(16, activation='relu'),
    Dense(1, activation='sigmoid')  # Binary: failure probability
])

model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])

# Train model
history = model.fit(
    X_train, y_train,
    epochs=50,
    batch_size=32,
    validation_data=(X_val, y_val),
    callbacks=[early_stopping, model_checkpoint]
)
```

## Lessons Learned

1. **Time-series preprocessing** is critical - proper normalization and windowing dramatically improved model performance
2. **Domain expertise** helped identify which sensor patterns indicate imminent failure
3. **Weekly retraining** maintains accuracy as equipment ages and failure patterns evolve
