from fastapi import FastAPI

app = FastAPI(
    title="Patient Registration API",
    version="1.0.0",
)


@app.get("/")
def root():
    return {
        "message": "Patient Registration API is running"
    }


@app.get("/health")
def health():
    return {
        "status": "healthy"
    }