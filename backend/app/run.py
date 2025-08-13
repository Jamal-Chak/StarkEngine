# app/run.py

from app import create_app

# Create the Flask app instance from the factory
app = create_app()

if __name__ == "__main__":
    # Run the app in debug mode on port 5000 (match Vite proxy & frontend settings)
    app.run(debug=True, port=5000)
