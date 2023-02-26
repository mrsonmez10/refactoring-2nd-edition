from math import sqrt

class CoordinatesSoln:
    def __init__(self, x_coordinate, y_coordinate, z_coordinate):
        self.x_coordinate = x_coordinate
        self.y_coordinate = y_coordinate
        self.z_coordinate = z_coordinate
    
    def distance(self):
        return sqrt(self.x_coordinate**2 + self.y_coordinate**2 + self.z_coordinate**2)  


my_coordinates = CoordinatesSoln(4, -7, 43)
print(my_coordinates.distance())