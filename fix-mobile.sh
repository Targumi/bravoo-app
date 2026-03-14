#!/bin/bash

# Fix mobile responsive - wrap all remaining steps in card-content / card-action

FILE="index.html"

# Fix recap_app
sed -i '' -e '/case '"'"'recap_app'"'"':/,/break;/{
  s|<div class="text-center mb-16">|<div class="card-content"><div class="text-center mb-16">|
  s|<button class="btn" id="continueBtn">|</div><div class="card-action"><button class="btn" id="continueBtn">|
  s|goNext);|goNext);</div>|
}' "$FILE"

# Fix email
sed -i '' -e '/case '"'"'email'"'"':/,/break;/{
  s|<div class="text-center mb-16">|<div class="card-content"><div class="text-center mb-16">|
  s|<button class="btn" id="continueBtn" disabled>|</div><div class="card-action"><button class="btn" id="continueBtn" disabled>|
}' "$FILE"

# Fix password
sed -i '' -e '/case '"'"'password'"'"':/,/break;/{
  s|<div class="text-center mb-16">|<div class="card-content"><div class="text-center mb-16">|
  s|<button|</div><div class="card-action"><button|
}' "$FILE"

# Fix loading_profile
sed -i '' -e '/case '"'"'loading_profile'"'"':/,/break;/{
  s|<div class="profile-loading-container">|<div class="card-content"><div class="profile-loading-container">|
  s|</div>$|</div></div>|
}' "$FILE"

# Fix paywall
sed -i '' -e '/case '"'"'paywall'"'"':/,/break;/{
  s|<div class="paywall-hero">|<div class="card-content"><div class="paywall-hero">|
  s|<button class="paywall-cta"|</div><div class="card-action"><button class="paywall-cta"|
}' "$FILE"

echo "Mobile fixes applied!"
