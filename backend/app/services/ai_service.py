"""Simple AI service wrapper to centralize model selection and calls.

This module reads the default model from the application's configuration
and exposes a small helper to call the OpenAI API. It is intentionally
lightweight: if the `openai` package or OPENAI_API_KEY is not present the
helpers will raise clear exceptions rather than failing silently.
"""
from typing import Optional, Dict, Any
import os

openai = None
try:  # pragma: no cover - runtime import guard
    import importlib

    openai = importlib.import_module("openai")
except Exception:
    openai = None


def get_default_model(app_config: Optional[Dict[str, Any]] = None) -> str:
    """Return the configured default model name.

    app_config may be either a mapping (e.g., Flask `app.config`) or None
    in which case environment variable DEFAULT_AI_MODEL is consulted.
    """
    if app_config and "DEFAULT_AI_MODEL" in app_config:
        return app_config["DEFAULT_AI_MODEL"]
    return os.getenv("DEFAULT_AI_MODEL", "gpt-5-mini")


def completions(prompt: str, *, model: Optional[str] = None, max_tokens: int = 256, temperature: float = 0.2) -> Dict[str, Any]:
    """Call the OpenAI completions (or chat) endpoint using configured model.

    Returns the raw response from the openai library. Raises informative
    errors if the `openai` package or OPENAI_API_KEY is missing.
    """
    if openai is None:
        raise RuntimeError("The 'openai' package is not installed. Add it to requirements and install dependencies.")

    api_key = os.getenv("OPENAI_API_KEY")
    if not api_key:
        raise RuntimeError("OPENAI_API_KEY environment variable is not set. Set it to your OpenAI API key to use AI features.")

    openai.api_key = api_key

    model_name = model or get_default_model()

    # Use chat completions when available; fall back to text completion.
    # For newer 'gpt-5-mini' like models, chat-style interface is typical.
    try:
        # Try chat completion first
        response = openai.ChatCompletion.create(
            model=model_name,
            messages=[{"role": "user", "content": prompt}],
            max_tokens=max_tokens,
            temperature=temperature,
        )
        return response
    except AttributeError:
        # Older openai packages or models - fall back to Completion
        response = openai.Completion.create(
            model=model_name,
            prompt=prompt,
            max_tokens=max_tokens,
            temperature=temperature,
        )
        return response
