import os

EXCLUDED_DIRS = {"venv", "__pycache__", ".git", "node_modules", "migrations"}

def list_files(start_path=".", indent=0):
    for item in sorted(os.listdir(start_path)):
        full_path = os.path.join(start_path, item)
        if os.path.isdir(full_path):
            if item not in EXCLUDED_DIRS:
                print(" " * indent + f"📁 {item}/")
                list_files(full_path, indent + 4)
        else:
            print(" " * indent + f"📄 {item}")

if __name__ == "__main__":
    list_files()
