import pandas as pd
import os

CHUNKS_FOLDER = "backend/csv_chunks"

chunk_files = sorted([
    os.path.join(CHUNKS_FOLDER, f)
    for f in os.listdir(CHUNKS_FOLDER)
    if f.endswith(".csv")
])

df_list = [pd.read_csv(f) for f in chunk_files]
df = pd.concat(df_list, ignore_index=True)
df.to_parquet("crime_dataset.parquet", compression="snappy")
print(f"✓ Merged {len(df)} rows from {len(df_list)} chunks")