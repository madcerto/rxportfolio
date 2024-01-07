import os

directory = input("input a directory path: ")

for filename in os.listdir(directory):
    print(filename[-4:])
    cur_ext = filename[-4:]
    f = os.path.join(directory, filename)
    # checking if it is a file
    if os.path.isfile(f):
        print(f)
        os.rename(f, f.lower())
