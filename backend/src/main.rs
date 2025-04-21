use axum::{Router, routing::get};
use tokio::net::TcpListener;

#[tokio::main]
async fn main() -> anyhow::Result<()> {
    tracing_subscriber::fmt::init();
    dotenvy::dotenv()?;

    let app = Router::new().route("/", get(root));

    let addr = dotenvy::var("BACKEND_ADDR")?;
    let listener = TcpListener::bind(addr).await?;

    tracing::debug!("listening on {}", listener.local_addr()?);
    axum::serve(listener, app).await?;
    Ok(())
}

async fn root() -> &'static str {
    "hello! this is /"
}
