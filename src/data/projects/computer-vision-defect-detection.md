---
title: "Computer Vision Defect Detection"
slug: "computer-vision-defect-detection"
summary: "Developed a computer vision model for manufacturing defect detection, improving quality control accuracy by 23% and reducing defects by $2.1M annually."
techStack: ["Python", "TensorFlow", "Keras", "OpenCV", "TensorRT", "ONNX"]
repoUrl: "https://github.com/janedoe/defect-detection"
featured: false
order: 3
date: "2024-03"
image: "/images/projects/defect-detection.svg"
---

## Overview

Built a real-time computer vision system for detecting manufacturing defects on production lines at Foxconn. The model identifies surface scratches, cracks, and color variations with higher accuracy than manual inspection.

## Technical Approach

### Model Architecture
- **Base Model**: ResNet-50 pre-trained on ImageNet
- **Custom Layers**: Added specialized detection heads for different defect types
- **Training**: Transfer learning with 50K+ labeled defect images

### Optimization
- Optimized inference with **TensorRT** for NVIDIA GPUs
- Achieved **6x speedup** (200ms → 33ms latency per image)
- Converted model to ONNX format for cross-platform deployment

### Data Augmentation
- Applied rotation, scaling, brightness adjustments
- Synthetic defect generation for rare defect types
- Increased training data diversity by 300%

## Results

- **23% improvement** in defect detection accuracy vs manual inspection
- **$2.1M annual savings** from reduced manufacturing defects
- **33ms inference time** enables real-time quality control
- **Deployed on 15 production lines** processing 500K+ items daily

## Code Example

```python
import tensorflow as tf
from tensorflow.keras.applications import ResNet50

# Load pre-trained ResNet50 base
base_model = ResNet50(weights='imagenet', include_top=False, input_shape=(224, 224, 3))

# Add custom classification head
x = base_model.output
x = tf.keras.layers.GlobalAveragePooling2D()(x)
x = tf.keras.layers.Dense(512, activation='relu')(x)
x = tf.keras.layers.Dropout(0.5)(x)
predictions = tf.keras.layers.Dense(4, activation='softmax')(x)  # 4 defect types

# Create final model
model = tf.keras.Model(inputs=base_model.input, outputs=predictions)

# Freeze base model layers
for layer in base_model.layers:
    layer.trainable = False

# Compile and train
model.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['accuracy'])
model.fit(train_generator, epochs=20, validation_data=val_generator)
```

## Impact

This system is now used across 15 production lines, inspecting 500K+ products daily and has become the gold standard for quality control at the facility.
