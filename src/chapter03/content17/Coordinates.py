from math import sqrt

class Coordinates:
    def __init__(self, x_coordinate, y_coordinate, z_coordinate):
        self.x_coordinate = x_coordinate
        self.y_coordinate = y_coordinate
        self.z_coordinate = z_coordinate




my_coordinates = Coordinates(4, -7, 43)
print(sqrt(my_coordinates.x_coordinate**2 + my_coordinates.y_coordinate**2 + my_coordinates.z_coordinate**2))  # Pythagorean theorem


# Mutable immutable