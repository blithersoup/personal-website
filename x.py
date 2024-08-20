import re
import subprocess

with open("blogs/new-format/yacutan.txt") as file:
    text = file.read()

images = re.findall(r"!\[\]\(([^)]+)\)", text)

for img in images:
    subprocess.run(["cp", f"public/blogpics/{img}", "yacutan-use/"])