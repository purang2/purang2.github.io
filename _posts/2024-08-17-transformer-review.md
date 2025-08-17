---
layout: post
title: "트랜스포머가 바꾼 모든 것"
date: 2024-08-17
category: "논문리뷰"
paper_info: "Attention Is All You Need - Vaswani et al."
venue: "NIPS 2017"
unread: true
excerpt: "트랜스포머는 단순히 새로운 아키텍처가 아니다. 이것은 AI의 패러다임을 바꾼 혁명이었다."
---

## TL;DR

트랜스포머는 RNN과 CNN을 완전히 배제하고 오직 어텐션 메커니즘만으로 시퀀스 모델을 구축한 혁신적인 아키텍처입니다.

## 핵심 아이디어

### Self-Attention의 강력함

기존 RNN의 순차적 처리 한계를 극복하고...

$$\text{Attention}(Q,K,V) = \text{softmax}\left(\frac{QK^T}{\sqrt{d_k}}\right)V$$

### 개인적 인사이트

Sam Altman이 자주 언급하는 "scaling laws"의 출발점이 바로 여기입니다...